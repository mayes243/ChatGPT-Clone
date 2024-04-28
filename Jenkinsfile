pipeline {
    agent {
        node {
            label 'nodejs'
        }
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        
        stage('Deploy') {
             steps {
                script {
                    // Build the Docker image
                    docker.build('my-react-app')
                    
                    // Run the Docker container
                    docker.image('my-react-app').run('-p 3000:3000')
                }
            }
        }
    }
    
    post {
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Deployment failed!'
        }
    }
}
