
echo "Port ${SSH_PORT}" >> /etc/ssh/sshd_config
sed -i "s/#PermitEmptyPasswords no/PermitEmptyPasswords yes/g" /etc/ssh/sshd_config
sed -i "s/#PermitRootLogin yes/PermitRootLogin yes/g" /etc/ssh/sshd_config
sed -i "s/#PermitRootLogin prohibit-password/PermitRootLogin yes/g" /etc/ssh/sshd_config
echo root:cube-studio | chpasswd
service ssh restart

sed -i "s/localhost/${SERVICE_EXTERNAL_IP}/g" /example/ssh连接
sed -i "s/localport/${SSH_PORT}/g" /example/ssh连接

# 客户端连接命令，    ssh -p ${SSH_PORT} root@${SERVICE_EXTERNAL_IP}