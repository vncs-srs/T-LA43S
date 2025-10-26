import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube, Shield, CreditCard, Smartphone } from 'lucide-react';


export function Footer({ onNavigate }) {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Aqui você implementaria a lógica de newsletter
    alert('Obrigado por se inscrever em nossa newsletter!');
  };

  return (
    <footer className="bg-background border-t mt-auto">
      <div className="container mx-auto px-4 py-12">
        {/* Seção Principal do Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Sobre a Empresa */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Marketplace</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Seu marketplace de confiança com os melhores produtos e preços. 
              Qualidade garantida e entrega rápida em todo o Brasil.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" className="h-8 w-8">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Links Úteis */}
          <div className="space-y-4">
            <h3 className="font-semibold">Links Úteis</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => onNavigate('home')}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button className="text-muted-foreground hover:text-foreground transition-colors">
                  Sobre Nós
                </button>
              </li>
              <li>
                <button className="text-muted-foreground hover:text-foreground transition-colors">
                  Como Comprar
                </button>
              </li>
              <li>
                <button className="text-muted-foreground hover:text-foreground transition-colors">
                  Política de Privacidade
                </button>
              </li>
              <li>
                <button className="text-muted-foreground hover:text-foreground transition-colors">
                  Termos de Uso
                </button>
              </li>
              <li>
                <button className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Atendimento */}
          <div className="space-y-4">
            <h3 className="font-semibold">Atendimento</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">(11) 4000-1234</span>
              </li>
              <li className="flex items-center gap-2">
                <Smartphone className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">(11) 99999-8888</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">contato@marketplace.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                <span className="text-muted-foreground">
                  Rua das Flores, 123<br />
                  Centro, São Paulo - SP<br />
                  CEP: 01234-567
                </span>
              </li>
            </ul>
            <div className="text-xs text-muted-foreground">
              <p>Segunda à Sexta: 8h às 18h</p>
              <p>Sábado: 8h às 14h</p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold">Newsletter</h3>
            <p className="text-sm text-muted-foreground">
              Receba ofertas exclusivas e novidades em primeira mão!
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <Input
                type="email"
                placeholder="Seu e-mail"
                required
                className="text-sm"
              />
              <Button type="submit" className="w-full" size="sm">
                Inscrever-se
              </Button>
            </form>
            <div className="text-xs text-muted-foreground">
              Ao se inscrever, você concorda com nossa política de privacidade.
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Seção de Pagamento e Segurança */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          
          {/* Formas de Pagamento */}
          <div className="space-y-4">
            <h4 className="font-semibold">Formas de Pagamento</h4>
            <div className="flex flex-wrap gap-2">
              <div className="bg-muted rounded px-3 py-2 text-xs font-medium">Visa</div>
              <div className="bg-muted rounded px-3 py-2 text-xs font-medium">Mastercard</div>
              <div className="bg-muted rounded px-3 py-2 text-xs font-medium">Elo</div>
              <div className="bg-muted rounded px-3 py-2 text-xs font-medium">PIX</div>
              <div className="bg-muted rounded px-3 py-2 text-xs font-medium">Boleto</div>
              <div className="bg-muted rounded px-3 py-2 text-xs font-medium">PayPal</div>
            </div>
            <div className="text-xs text-muted-foreground">
              Parcelamento em até 12x sem juros no cartão de crédito
            </div>
          </div>

          {/* Segurança e Certificações */}
          <div className="space-y-4">
            <h4 className="font-semibold">Segurança e Certificações</h4>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-muted rounded px-3 py-2">
                <Shield className="h-4 w-4 text-green-600" />
                <span className="text-xs font-medium">SSL Seguro</span>
              </div>
              <div className="bg-muted rounded px-3 py-2 text-xs font-medium">
                Certificado PCI DSS
              </div>
              <div className="bg-muted rounded px-3 py-2 text-xs font-medium">
                Reclame Aqui
              </div>
            </div>
            <div className="text-xs text-muted-foreground">
              Seus dados estão protegidos com criptografia de ponta
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Informações Legais */}
        <div className="space-y-4">
          <div className="text-xs text-muted-foreground leading-relaxed">
            <p className="mb-2">
              <strong>Marketplace Ltda.</strong> - CNPJ: 12.345.678/0001-90 | 
              Inscrição Estadual: 123.456.789.012
            </p>
            <p className="mb-2">
              Endereço: Rua das Flores, 123, Centro - São Paulo/SP - CEP: 01234-567
            </p>
            <p>
              Este site é protegido por reCAPTCHA e se aplicam a 
              <button className="underline ml-1 hover:text-foreground">
                Política de Privacidade
              </button> e os 
              <button className="underline ml-1 hover:text-foreground">
                Termos de Serviço
              </button> do Google.
            </p>
          </div>
        </div>

        <Separator className="my-6" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>
            © 2024 Marketplace. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <button className="hover:text-foreground transition-colors">
              Política de Cookies
            </button>
            <button className="hover:text-foreground transition-colors">
              Acessibilidade
            </button>
            <button className="hover:text-foreground transition-colors">
              Mapa do Site
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}