#!/bin/bash

echo "🔐 Vérification de la clé SSH..."

# Chemins
KEY_PATH="$HOME/.ssh/id_rsa"
PUB_KEY="$KEY_PATH.pub"

# 1. Création de la clé SSH si elle n'existe pas
if [ ! -f "$PUB_KEY" ]; then
    echo "🚀 Clé SSH non trouvée. Génération..."
    ssh-keygen -t rsa -b 4096 -C "guetchou@users.noreply.github.com" -f "$KEY_PATH" -N ""
else
    echo "✅ Clé SSH déjà existante : $PUB_KEY"
fi

# 2. Création du fichier ~/.ssh/config pour GitHub
echo "📦 Configuration de ~/.ssh/config"
cat > ~/.ssh/config <<EOF
Host github.com
  HostName github.com
  User git
  IdentityFile $KEY_PATH
  IdentitiesOnly yes
EOF

chmod 600 ~/.ssh/config
echo "✅ Fichier SSH config créé."

# 3. Affichage de la clé publique à copier
echo
echo "📋 Clé publique à copier et coller sur GitHub (compte guetchou) :"
echo "➡️ Va sur https://github.com/settings/keys et clique sur 'New SSH key'"
echo "➡️ Donne-lui un nom comme ViciBox12, colle cette clé :"
echo "──────────────────────────────────────────────"
cat "$PUB_KEY"
echo "──────────────────────────────────────────────"

# 4. Test connexion SSH
echo "🔍 Test de la connexion SSH avec GitHub..."
ssh -T git@github.com
