import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import '@/styles/register.css';

export function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
    // Por enquanto, apenas navega de volta para home
    navigate('/');
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="auth-container">
      <Card className="auth-card auth-card-login">
        <CardHeader className="auth-header">
          <CardTitle className="auth-title">Entrar</CardTitle>
          <CardDescription className="auth-description">
            Digite suas credenciais para acessar sua conta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="auth-form">
            <div className="auth-input-group">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="auth-input-group">
              <Label htmlFor="password">Senha</Label>
              <div className="auth-password-wrapper">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Sua senha"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="auth-password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff />
                  ) : (
                    <Eye />
                  )}
                </button>
              </div>
            </div>

            <div className="auth-input-group">
              <Button
                type="button"
                variant="link"
                className="auth-forgot-password-link"
                onClick={() => {
                  //recuperação de senha
                  console.log('Forgot password clicked');
                }}
              >
                Esqueceu a senha?
              </Button>
            </div>

            <Button type="submit" className="auth-submit-button">
              Entrar
            </Button>
          </form>

          <Separator className="auth-separator" />

          <div className="auth-link-container">
            <span className="auth-link-text">Não tem uma conta? </span>
            <Button
              variant="link"
              className="auth-link"
              onClick={() => navigate('/register')}
            >
              Cadastre-se
            </Button>
          </div>

          <div className="auth-continue-wrapper">
            <Button
              variant="outline"
              onClick={() => navigate('/')} // Corrigido o navegamento para a página inicial
              className="auth-continue-button"
            >
              Continuar sem login
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}