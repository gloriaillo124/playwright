echo "lancer un test"
npx playwright test

echo "Génère un rapport de test"
npx playwright show-report

echo "affiche moi le trace viewer"
npx playwright show-trace ./test-results/login--login-username-correct-and-password-correct-chromium/trace.zip

echo "ensemble des threads"
npx playwright test —workers=1

echo "lance un test precisé avec le @tag"
npx playwright test --ui --grep "@tc-012"

echo "Lance l'interface graphique"
npx playwright test --ui

echo 'generer le report avec junit'
npx playwright test --reporter=junit --output=results.xml

