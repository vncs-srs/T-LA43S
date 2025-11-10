import React from 'react';
import {
  Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube,
  Shield, CreditCard, Smartphone
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import '@/styles/footer.css';

export function Footer() {
  const navigate = useNavigate();

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert('Obrigado por se inscrever em nossa newsletter!');
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* Seção Principal */}
        <div className="footer-main-grid">
          
          {/* Sobre a Empresa */}
          <div className="footer-column">
            <h3 className="footer-column-title">Marketplace</h3>
            <p className="footer-description">
              Seu marketplace de confiança com os melhores produtos e preços.
              Qualidade garantida e entrega rápida em todo o Brasil.
            </p>
            <div className="footer-socials">
              <Button variant="outline" size="icon" className="footer-social-button">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="footer-social-button">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="footer-social-button">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="footer-social-button">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Links Úteis */}
          <div className="footer-column">
            <h3 className="footer-column-title">Links Úteis</h3>
            <ul className="footer-link-list">
              <li><button onClick={() => navigate('/')} className="footer-link">Início</button></li>
              <li><button className="footer-link">Sobre Nós</button></li>
              <li><button className="footer-link">Como Comprar</button></li>
              <li><button className="footer-link">Política de Privacidade</button></li>
              <li><button className="footer-link">Termos de Uso</button></li>
              <li><button className="footer-link">FAQ</button></li>
            </ul>
          </div>

          {/* Atendimento */}
          <div className="footer-column">
            <h3 className="footer-column-title">Atendimento</h3>
            <ul className="footer-link-list">
              <li className="footer-contact-item">
                <Phone className="footer-contact-icon" />
                <span className="footer-contact-text">(11) 4000-1234</span>
              </li>
              <li className="footer-contact-item">
                <Smartphone className="footer-contact-icon" />
                <span className="footer-contact-text">(11) 99999-8888</span>
              </li>
              <li className="footer-contact-item">
                <Mail className="footer-contact-icon" />
                <span className="footer-contact-text">contato@marketplace.com</span>
              </li>
              <li className="footer-contact-item-text-wrapper">
                <MapPin className="footer-contact-icon-map" />
                <span className="footer-contact-text">
                  Rua das Flores, 123<br />
                  Centro, São Paulo - SP<br />
                  CEP: 01234-567
                </span>
              </li>
            </ul>
            <div className="footer-small-text">
              <p>Segunda à Sexta: 8h às 18h</p>
              <p>Sábado: 8h às 14h</p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="footer-column">
            <h3 className="footer-column-title">Newsletter</h3>
            <p className="footer-description">
              Receba ofertas exclusivas e novidades em primeira mão!
            </p>
            <form onSubmit={handleNewsletterSubmit} className="footer-newsletter-form">
              <Input
                type="email"
                placeholder="Seu e-mail"
                required
                className="footer-newsletter-input"
              />
              <Button type="submit" className="footer-newsletter-button" size="sm">
                Inscrever-se
              </Button>
            </form>
            <div className="footer-small-text">
              Ao se inscrever, você concorda com nossa política de privacidade.
            </div>
          </div>
        </div>

        <Separator className="footer-separator" />

        {/* Pagamento e Segurança */}
        <div className="footer-secondary-grid">
          
          {/* Pagamento */}
          <div className="footer-secondary-column">
            <h4 className="footer-secondary-title">Formas de Pagamento</h4>
            <div className="footer-tags-container">
              <div className="footer-tag">Visa</div>
              <div className="footer-tag">Mastercard</div>
              <div className="footer-tag">Elo</div>
              <div className="footer-tag">PIX</div>
              <div className="footer-tag">Boleto</div>
              <div className="footer-tag">PayPal</div>
            </div>
            <div className="footer-small-text">
              Parcelamento em até 12x sem juros no cartão de crédito
            </div>
          </div>

          {/* Segurança */}
          <div className="footer-secondary-column">
            <h4 className="footer-secondary-title">Segurança e Certificações</h4>
            <div className="footer-tags-container">
              <div className="footer-tag-ssl">
                <Shield className="footer-ssl-icon" />
                <span>SSL Seguro</span>
              </div>
              <div className="footer-tag">Certificado PCI DSS</div>
              <div className="footer-tag">Reclame Aqui</div>
            </div>
            <div className="footer-small-text">
              Seus dados estão protegidos com criptografia de ponta
            </div>
          </div>
        </div>

        <Separator className="footer-separator" />

        {/* Informações Legais */}
        <div className="footer-legal-text">
          <p>
            <strong>Marketplace Ltda.</strong> - CNPJ: 12.345.678/0001-90 |
            Inscrição Estadual: 123.456.789.012
          </p>
          <p>
            Endereço: Rua das Flores, 123, Centro - São Paulo/SP - CEP: 01234-567
          </p>
          <p>
            Este site é protegido por reCAPTCHA e se aplicam a
            <button className="footer-legal-link">Política de Privacidade</button> e os
            <button className="footer-legal-link">Termos de Serviço</button> do Google.
          </p>
        </div>

        <Separator className="footer-separator" />

        {/* Copyright */}
        <div className="footer-copyright-section">
          <p>© 2024 Marketplace. Todos os direitos reservados.</p>
          <div className="footer-copyright-links">
            <button className="footer-copyright-link">Política de Cookies</button>
            <button className="footer-copyright-link">Acessibilidade</button>
            <button className="footer-copyright-link">Mapa do Site</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
