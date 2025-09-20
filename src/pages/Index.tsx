import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Phone, 
  MapPin, 
  Heart, 
  Ambulance, 
  PawPrint, 
  Shield, 
  Clock, 
  Users,
  Stethoscope,
  MessageCircle
} from 'lucide-react';
import heroImage from '../assets/hero-emergency.jpg';
import drMasukaAvatar from '../assets/dr-masuka-avatar.jpg';
import petAmbulanceImage from '../assets/pet-ambulance.jpg';
import DrMasukaAssistant from '../components/DrMasukaAssistant';

const Index = () => {
  const [showAssistant, setShowAssistant] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
              <Heart className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Health-SOS</h1>
              <p className="text-xs text-muted-foreground">Emergency Healthcare</p>
            </div>
          </div>
          <Button
            onClick={() => setShowAssistant(true)}
            className="emergency-gradient text-white font-semibold shadow-emergency hover:scale-105 transition-transform"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Dr. Masuka
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden hero-gradient py-20">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge variant="secondary" className="w-fit">
              <Shield className="h-3 w-3 mr-1" />
              Emergency Healthcare App
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              Your trusted companion in{' '}
              <span className="text-primary">medical emergencies</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In an emergency, every second counts. Health-SOS connects you instantly to nearby medical facilities, 
              emergency services, and provides critical first-aid guidance when you need it most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => setShowAssistant(true)}
                size="lg"
                className="emergency-gradient text-white font-semibold shadow-emergency hover:scale-105 transition-transform"
              >
                <Heart className="h-5 w-5 mr-2" />
                Send SOS
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Ambulance className="h-5 w-5 mr-2" />
                Book Ambulance
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl blur-3xl"></div>
            <img
              src={heroImage}
              alt="Emergency healthcare app interface"
              className="relative z-10 w-full h-auto rounded-2xl shadow-medical"
            />
          </div>
        </div>
      </section>

      {/* Quick Access Features */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Quick Emergency Access</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Instant access to critical emergency services designed for speed and reliability
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group hover:shadow-medical transition-all duration-300 cursor-pointer border-0 shadow-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 emergency-gradient rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">SOS Alert</h3>
                <p className="text-sm text-muted-foreground">Instant emergency signal to nearest medical facilities</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-medical transition-all duration-300 cursor-pointer border-0 shadow-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 medical-gradient rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Ambulance className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Book Ambulance</h3>
                <p className="text-sm text-muted-foreground">Quick ambulance booking with live tracking</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-medical transition-all duration-300 cursor-pointer border-0 shadow-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8 text-success-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Donate</h3>
                <p className="text-sm text-muted-foreground">Support emergency medical services</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-medical transition-all duration-300 cursor-pointer border-0 shadow-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-warning rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <PawPrint className="h-8 w-8 text-warning-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Pet Ambulance</h3>
                <p className="text-sm text-muted-foreground">Emergency veterinary services for pets</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dr. Masuka Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <img
                  src={drMasukaAvatar}
                  alt="Dr. Masuka"
                  className="w-24 h-24 rounded-full shadow-medical"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-success rounded-full flex items-center justify-center">
                  <Stethoscope className="h-4 w-4 text-success-foreground" />
                </div>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Meet Dr. Masuka 👩‍⚕️
            </h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Your AI medical assistant available 24/7. Dr. Masuka helps you find the fastest emergency aid available, 
              whether for humans or animals, based on severity and your location.
            </p>
            <Button
              onClick={() => setShowAssistant(true)}
              size="lg"
              className="emergency-gradient text-white font-semibold shadow-emergency"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Start Emergency Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Pet Emergency Section */}
      <section className="py-16 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="w-fit mb-4">
                <PawPrint className="h-3 w-3 mr-1" />
                Veterinary Emergency
              </Badge>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Emergency Care for Your Pets
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Your beloved pets deserve the same level of emergency care. Our specialized pet ambulance 
                service connects you with veterinary emergency facilities and mobile vet units.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-foreground">24/7 veterinary emergency response</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Nearest animal hospital locator</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Direct connect to emergency vets</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={petAmbulanceImage}
                alt="Pet ambulance service"
                className="w-full h-auto rounded-2xl shadow-medical"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Awareness */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">Emergency Awareness Checklist</h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-foreground text-sm font-bold">1</span>
                </div>
                <p className="text-muted-foreground">Keep emergency contacts readily accessible on your phone</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-foreground text-sm font-bold">2</span>
                </div>
                <p className="text-muted-foreground">Know your medical history and current medications</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-foreground text-sm font-bold">3</span>
                </div>
                <p className="text-muted-foreground">Learn basic first-aid and CPR techniques</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-foreground text-sm font-bold">4</span>
                </div>
                <p className="text-muted-foreground">Always carry identification and emergency medical information</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 emergency-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Be Prepared. Stay Safe.
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Download our app and have peace of mind knowing that emergency help is just a tap away. 
            Your safety and the safety of your loved ones is our priority.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="font-semibold shadow-lg hover:scale-105 transition-transform"
          >
            Download Health-SOS App
          </Button>
        </div>
      </section>

      {/* Dr. Masuka Assistant Modal */}
      {showAssistant && (
        <DrMasukaAssistant onClose={() => setShowAssistant(false)} />
      )}
    </div>
  );
};

export default Index;