pipeline {
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:v1.55.0-noble'
            args '--ipc=host'
        }
    }

    stages {
        stage('Install dependencies & Run Tests') {
            steps {
                sh 'npm ci'
                sh 'npx playwright test --reporter=junit,allure-playwright'
                stash name: 'allure-results', includes: 'allure-results/*'
            }
        }

        stage('Publish JUnit Report') {
            steps {
                junit 'playwright-report/results.xml'
            }
        }
    }

    post {
        always {
            unstash 'allure-results'
            allure([
                includeProperties: false,
                jdk: '',
                properties: [],
                reportBuildPolicy: 'ALWAYS',
                results: [[path: 'allure-results']]
            ])
        }
    }
}
