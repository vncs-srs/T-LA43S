import React, { useState } from 'react';
import { Eye, EyeOff, User, MapPin, CreditCard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import '@/styles/register.css';

export function RegisterPage() { 
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // Dados pessoais
    firstName: '',
    lastName: '',
    cpf: '',
    phone: '',
    birthDate: '',
    gender: '',
    
    // Endereço
    zipCode: '',
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
    
    // Dados de acesso
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('As senhas não coincidem');
      return;
    }
    
    if (!formData.acceptTerms) {
      alert('Você deve aceitar os termos e condições');
      return;
    }
    
    // Validação básica de CPF (11 dígitos)
    const cpfNumbers = formData.cpf.replace(/\D/g, '');
    if (cpfNumbers.length !== 11) {
      alert('CPF deve ter 11 dígitos');
      return;
    }
    
    // Validação de CEP (8 dígitos)
    const zipNumbers = formData.zipCode.replace(/\D/g, '');
    if (zipNumbers.length !== 8) {
      alert('CEP deve ter 8 dígitos');
      return;
    }
    
    console.log('Register attempt:', formData);
    alert('Cadastro realizado com sucesso!');
    // Por enquanto, apenas navega para login
    navigate('/login');;
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const formatCPF = (value) => {
    const numbers = value.replace(/\D/g, '');
    return numbers.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  };

  const formatPhone = (value) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 10) {
      return numbers.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    }
    return numbers.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  };

  const formatZipCode = (value) => {
    const numbers = value.replace(/\D/g, '');
    return numbers.replace(/(\d{5})(\d{3})/, '$1-$2');
  };

  const handleFormattedChange = (e, formatter) => {
    const formatted = formatter(e.target.value);
    setFormData(prev => ({
      ...prev,
      [e.target.name]: formatted
    }));
  };

  const handleCheckboxChange = (checked) => {
    setFormData(prev => ({
      ...prev,
      acceptTerms: checked
    }));
  };

  return (
    <div className="auth-container">
      <Card className="auth-card auth-card-register">
        <CardHeader className="auth-header">
          <CardTitle className="auth-title">Criar Conta</CardTitle>
          <CardDescription className="auth-description">
            Preencha seus dados para finalizar o cadastro
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="auth-form">
            
            {/* Dados Pessoais */}
            <div className="auth-form-section">
              <div className="auth-section-header">
                <User className="auth-section-icon" />
                <h3 className="auth-section-title">Dados Pessoais</h3>
              </div>
              
              <div className="auth-grid">
                <div className="auth-input-group">
                  <Label htmlFor="firstName">Nome *</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="João"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="auth-input-group">
                  <Label htmlFor="lastName">Sobrenome *</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Silva"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="auth-grid">
                <div className="auth-input-group">
                  <Label htmlFor="cpf">CPF *</Label>
                  <Input
                    id="cpf"
                    name="cpf"
                    type="text"
                    placeholder="000.000.000-00"
                    value={formData.cpf}
                    onChange={(e) => handleFormattedChange(e, formatCPF)}
                    maxLength={14}
                    required
                  />
                </div>
                <div className="auth-input-group">
                  <Label htmlFor="phone">Telefone *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="text"
                    placeholder="(11) 99999-9999"
                    value={formData.phone}
                    onChange={(e) => handleFormattedChange(e, formatPhone)}
                    maxLength={15}
                    required
                  />
                </div>
              </div>

              <div className="auth-grid">
                <div className="auth-input-group">
                  <Label htmlFor="birthDate">Data de Nascimento *</Label>
                  <Input
                    id="birthDate"
                    name="birthDate"
                    type="date"
                    value={formData.birthDate}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="auth-input-group">
                  <Label htmlFor="gender">Gênero</Label>
                  <Select value={formData.gender} onValueChange={(value) => handleSelectChange('gender', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="masculino">Masculino</SelectItem>
                      <SelectItem value="feminino">Feminino</SelectItem>
                      <SelectItem value="outro">Outro</SelectItem>
                      <SelectItem value="nao-informar">Prefiro não informar</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <Separator />

            {/* Endereço */}
            <div className="auth-form-section">
              <div className="auth-section-header">
                <MapPin className="auth-section-icon" />
                <h3 className="auth-section-title">Endereço para Entrega</h3>
              </div>

              <div className="auth-grid-col-3">
                <div className="auth-input-group">
                  <Label htmlFor="zipCode">CEP *</Label>
                  <Input
                    id="zipCode"
                    name="zipCode"
                    type="text"
                    placeholder="00000-000"
                    value={formData.zipCode}
                    onChange={(e) => handleFormattedChange(e, formatZipCode)}
                    maxLength={9}
                    required
                  />
                </div>
                <div className="auth-input-group auth-grid-col-span-2">
                  <Label htmlFor="street">Rua/Avenida *</Label>
                  <Input
                    id="street"
                    name="street"
                    type="text"
                    placeholder="Rua das Flores"
                    value={formData.street}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="auth-grid-col-3">
                <div className="auth-input-group">
                  <Label htmlFor="number">Número *</Label>
                  <Input
                    id="number"
                    name="number"
                    type="text"
                    placeholder="123"
                    value={formData.number}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="auth-input-group auth-grid-col-span-2">
                  <Label htmlFor="complement">Complemento</Label>
                  <Input
                    id="complement"
                    name="complement"
                    type="text"
                    placeholder="Apto 45, Bloco B"
                    value={formData.complement}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="auth-grid-col-3">
                <div className="auth-input-group">
                  <Label htmlFor="neighborhood">Bairro *</Label>
                  <Input
                    id="neighborhood"
                    name="neighborhood"
                    type="text"
                    placeholder="Centro"
                    value={formData.neighborhood}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="auth-input-group">
                  <Label htmlFor="city">Cidade *</Label>
                  <Input
                    id="city"
                    name="city"
                    type="text"
                    placeholder="São Paulo"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="auth-input-group">
                  <Label htmlFor="state">Estado *</Label>
                  <Select value={formData.state} onValueChange={(value) => handleSelectChange('state', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="UF" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="AC">Acre</SelectItem>
                      <SelectItem value="AL">Alagoas</SelectItem>
                      <SelectItem value="AP">Amapá</SelectItem>
                      <SelectItem value="AM">Amazonas</SelectItem>
                      <SelectItem value="BA">Bahia</SelectItem>
                      <SelectItem value="CE">Ceará</SelectItem>
                      <SelectItem value="DF">Distrito Federal</SelectItem>
                      <SelectItem value="ES">Espírito Santo</SelectItem>
                      <SelectItem value="GO">Goiás</SelectItem>
                      <SelectItem value="MA">Maranhão</SelectItem>
                      <SelectItem value="MT">Mato Grosso</SelectItem>
                      <SelectItem value="MS">Mato Grosso do Sul</SelectItem>
                      <SelectItem value="MG">Minas Gerais</SelectItem>
                      <SelectItem value="PA">Pará</SelectItem>
                      <SelectItem value="PB">Paraíba</SelectItem>
                      <SelectItem value="PR">Paraná</SelectItem>
                      <SelectItem value="PE">Pernambuco</SelectItem>
                      <SelectItem value="PI">Piauí</SelectItem>
                      <SelectItem value="RJ">Rio de Janeiro</SelectItem>
                      <SelectItem value="RN">Rio Grande do Norte</SelectItem>
                      <SelectItem value="RS">Rio Grande do Sul</SelectItem>
                      <SelectItem value="RO">Rondônia</SelectItem>
                      <SelectItem value="RR">Roraima</SelectItem>
                      <SelectItem value="SC">Santa Catarina</SelectItem>
                      <SelectItem value="SP">São Paulo</SelectItem>
                      <SelectItem value="SE">Sergipe</SelectItem>
                      <SelectItem value="TO">Tocantins</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <Separator />

            {/* Dados de Acesso */}
            <div className="auth-form-section">
              <div className="auth-section-header">
                <CreditCard className="auth-section-icon" />
                <h3 className="auth-section-title">Dados de Acesso</h3>
              </div>

              <div className="auth-input-group">
                <Label htmlFor="email">E-mail *</Label>
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
              
              <div className="auth-grid">
                <div className="auth-input-group">
                  <Label htmlFor="password">Senha *</Label>
                  <div className="auth-password-wrapper">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Mínimo 8 caracteres"
                      value={formData.password}
                      onChange={handleChange}
                      minLength={8}
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="auth-password-toggle"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff />
                      ) : (
                        <Eye />
                      )}
                    </Button>
                  </div>
                </div>

                <div className="auth-input-group">
                  <Label htmlFor="confirmPassword">Confirmar Senha *</Label>
                  <div className="auth-password-wrapper">
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder="Repita sua senha"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="auth-password-toggle"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? (
                        <EyeOff />
                      ) : (
                        <Eye />
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <div className="auth-terms-checkbox">
                <Checkbox
                  id="acceptTerms"
                  checked={formData.acceptTerms}
                  onCheckedChange={handleCheckboxChange}
                />
                <Label htmlFor="acceptTerms" className="auth-terms-label">
                  Aceito os{' '}
                  <Button variant="link" className="px-0 h-auto text-sm">
                    termos e condições
                  </Button>
                  {' '}e{' '}
                  <Button variant="link" className="px-0 h-auto text-sm">
                    política de privacidade
                  </Button>
                </Label>
              </div>
              
              <Button type="submit" className="auth-submit-button" size="lg">
                Criar Conta
              </Button>
            </div>
          </form>

          <Separator />

          <div className="auth-link-container">
            <span className="auth-link-text">Já tem uma conta? </span>
            <Button
              variant="link"
              className="auth-link"
              onClick={() => navigate('/login')}
            >
              Faça login
            </Button>
          </div>

          <div className="auth-continue-wrapper">
            <Button
              variant="outline"
              onClick={() => navigate('/')}
              className="auth-continue-button"
            >
              Continuar sem cadastro
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}