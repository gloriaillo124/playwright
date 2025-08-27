pipeline {
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:v1.49.0-jammy'
            args '-u root' // optionnel si tu veux exécuter en root
        }
    }

    stages {
        stage('Install dependencies') {
            steps {
                echo 'Install dependencies...'
                sh 'npm ci'
            }
        }

        stage('Run tests') {
            steps {
                echo 'Run Playwright tests...'
                sh 'npx playwright test'
            }
        }
    }
}
