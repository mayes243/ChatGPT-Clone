pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                git 'git@github.com:mayes243/ChatGPT-Clone.git'
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
