pipeline {
    agent { 
        docker { 
            image 'mcr.microsoft.com/playwright:v1.54.2-noble' 
        } 
    }
    stages {
        stage('e2e-tests') {
            steps {
                sh 'npm ci'
                sh 'npx playwright test'
            }
        }
    }
}
