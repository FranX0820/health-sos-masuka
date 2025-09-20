import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  X, 
  MessageCircle, 
  User, 
  PawPrint, 
  AlertCircle, 
  Clock, 
  MapPin,
  Phone,
  Navigation,
  Stethoscope,
  Ambulance,
  Heart
} from 'lucide-react';
import drMasukaAvatar from '../assets/dr-masuka-avatar.jpg';

interface DrMasukaAssistantProps {
  onClose: () => void;
}

type Step = 'greeting' | 'recipient' | 'severity' | 'location' | 'results';
type Recipient = 'human' | 'animal';
type Severity = 'critical' | 'urgent' | 'mild';

interface EmergencyFacility {
  id: string;
  name: string;
  type: string;
  distance: string;
  is24x7: boolean;
  phone: string;
  address: string;
  specialties?: string[];
}

const DrMasukaAssistant = ({ onClose }: DrMasukaAssistantProps) => {
  const [step, setStep] = useState<Step>('greeting');
  const [recipient, setRecipient] = useState<Recipient | null>(null);
  const [severity, setSeverity] = useState<Severity | null>(null);
  const [location, setLocation] = useState('');
  const [isGettingLocation, setIsGettingLocation] = useState(false);

  // Mock emergency facilities data
  const mockFacilities: EmergencyFacility[] = [
    {
      id: '1',
      name: 'City General Hospital',
      type: 'Emergency Department',
      distance: '0.8 km',
      is24x7: true,
      phone: '+1-555-0123',
      address: '123 Main Street, Downtown',
      specialties: ['Emergency Medicine', 'Trauma', 'Cardiology']
    },
    {
      id: '2',
      name: 'Rapid Care Clinic',
      type: 'Urgent Care',
      distance: '1.2 km',
      is24x7: false,
      phone: '+1-555-0456',
      address: '456 Oak Avenue, Midtown',
      specialties: ['General Medicine', 'Minor Injuries']
    },
    {
      id: '3',
      name: 'Pet Emergency Vet',
      type: 'Veterinary Hospital',
      distance: '2.1 km',
      is24x7: true,
      phone: '+1-555-0789',
      address: '789 Pet Lane, Suburbs',
      specialties: ['Emergency Veterinary', 'Surgery', 'Critical Care']
    }
  ];

  const getCurrentLocation = () => {
    setIsGettingLocation(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation(`${position.coords.latitude.toFixed(4)}, ${position.coords.longitude.toFixed(4)}`);
          setIsGettingLocation(false);
          setStep('results');
        },
        () => {
          setIsGettingLocation(false);
          // Fallback to manual location entry
        }
      );
    } else {
      setIsGettingLocation(false);
    }
  };

  const handleLocationSubmit = () => {
    if (location.trim()) {
      setStep('results');
    }
  };

  const getSeverityColor = (sev: Severity) => {
    switch (sev) {
      case 'critical': return 'bg-destructive text-destructive-foreground';
      case 'urgent': return 'bg-warning text-warning-foreground';
      case 'mild': return 'bg-success text-success-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getSeverityMessage = () => {
    if (!severity) return '';
    switch (severity) {
      case 'critical':
        return 'Calling emergency services immediately. Please stay calm and follow basic first aid if trained.';
      case 'urgent':
        return 'Finding the nearest appropriate medical facility for immediate care.';
      case 'mild':
        return 'Locating nearby healthcare options for non-emergency treatment.';
    }
  };

  const filteredFacilities = mockFacilities.filter(facility => {
    if (recipient === 'animal') {
      return facility.type.includes('Veterinary');
    }
    return !facility.type.includes('Veterinary');
  });

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-emergency">
        <CardHeader className="bg-primary text-primary-foreground">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src={drMasukaAvatar}
                alt="Dr. Masuka"
                className="w-12 h-12 rounded-full border-2 border-primary-foreground"
              />
              <div>
                <CardTitle className="text-xl">Dr. Masuka 👩‍⚕️</CardTitle>
                <p className="text-primary-foreground/90 text-sm">Emergency Medical Assistant</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-primary-foreground hover:bg-primary-foreground/20"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="p-6 overflow-y-auto">
          {step === 'greeting' && (
            <div className="text-center space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">
                  Hello, I'm Dr. Masuka 👩‍⚕️
                </h3>
                <p className="text-muted-foreground">
                  I'll help you find the fastest emergency aid available. Let's start by identifying who needs help.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Button
                  onClick={() => {
                    setRecipient('human');
                    setStep('severity');
                  }}
                  variant="outline"
                  className="h-20 flex-col space-y-2 hover:bg-accent"
                >
                  <User className="h-8 w-8 text-primary" />
                  <span className="font-semibold">Human</span>
                </Button>
                <Button
                  onClick={() => {
                    setRecipient('animal');
                    setStep('severity');
                  }}
                  variant="outline"
                  className="h-20 flex-col space-y-2 hover:bg-accent"
                >
                  <PawPrint className="h-8 w-8 text-primary" />
                  <span className="font-semibold">Animal</span>
                </Button>
              </div>
            </div>
          )}

          {step === 'severity' && (
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h3 className="text-xl font-semibold text-foreground">
                  How severe is the situation?
                </h3>
                <p className="text-muted-foreground">
                  This helps me prioritize and find the most appropriate care facility.
                </p>
              </div>
              <div className="space-y-3">
                <Button
                  onClick={() => {
                    setSeverity('critical');
                    setStep('location');
                  }}
                  variant="outline"
                  className="w-full h-16 justify-start space-x-4 hover:bg-destructive/10 border-destructive/30"
                >
                  <div className="w-12 h-12 bg-destructive rounded-full flex items-center justify-center">
                    <AlertCircle className="h-6 w-6 text-destructive-foreground" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-destructive">Critical</div>
                    <div className="text-sm text-muted-foreground">Life-threatening emergency</div>
                  </div>
                </Button>
                <Button
                  onClick={() => {
                    setSeverity('urgent');
                    setStep('location');
                  }}
                  variant="outline"
                  className="w-full h-16 justify-start space-x-4 hover:bg-warning/10 border-warning/30"
                >
                  <div className="w-12 h-12 bg-warning rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-warning-foreground" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-warning-foreground">Urgent</div>
                    <div className="text-sm text-muted-foreground">Needs immediate attention</div>
                  </div>
                </Button>
                <Button
                  onClick={() => {
                    setSeverity('mild');
                    setStep('location');
                  }}
                  variant="outline"
                  className="w-full h-16 justify-start space-x-4 hover:bg-success/10 border-success/30"
                >
                  <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center">
                    <Stethoscope className="h-6 w-6 text-success-foreground" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-success">Mild</div>
                    <div className="text-sm text-muted-foreground">Non-emergency care needed</div>
                  </div>
                </Button>
              </div>
            </div>
          )}

          {step === 'location' && (
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h3 className="text-xl font-semibold text-foreground">
                  What's your location?
                </h3>
                <p className="text-muted-foreground">
                  I need your location to find the nearest medical facilities.
                </p>
              </div>

              {severity && (
                <div className="p-4 rounded-lg bg-muted/50 border-l-4 border-primary">
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge className={getSeverityColor(severity)}>
                      {severity.charAt(0).toUpperCase() + severity.slice(1)}
                    </Badge>
                    <span className="text-sm text-muted-foreground">for {recipient}</span>
                  </div>
                  <p className="text-sm text-foreground">{getSeverityMessage()}</p>
                </div>
              )}

              <div className="space-y-4">
                <Button
                  onClick={getCurrentLocation}
                  disabled={isGettingLocation}
                  className="w-full emergency-gradient text-white"
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  {isGettingLocation ? 'Getting your location...' : 'Use GPS Location'}
                </Button>
                
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-muted" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">Or enter manually</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Input
                    placeholder="Enter city, zip code, or address"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleLocationSubmit()}
                  />
                  <Button
                    onClick={handleLocationSubmit}
                    disabled={!location.trim()}
                    variant="outline"
                    className="w-full"
                  >
                    Find Nearby Facilities
                  </Button>
                </div>
              </div>
            </div>
          )}

          {step === 'results' && (
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h3 className="text-xl font-semibold text-foreground">
                  Nearby Emergency Facilities
                </h3>
                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{location}</span>
                  {severity && (
                    <>
                      <span>•</span>
                      <Badge variant="secondary" className="text-xs">
                        {severity} - {recipient}
                      </Badge>
                    </>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                {filteredFacilities.map((facility) => (
                  <Card key={facility.id} className="border shadow-card hover:shadow-medical transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-foreground">{facility.name}</h4>
                          <p className="text-sm text-muted-foreground">{facility.type}</p>
                          <p className="text-xs text-muted-foreground mt-1">{facility.address}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-primary">{facility.distance}</p>
                          {facility.is24x7 && (
                            <Badge variant="secondary" className="text-xs mt-1">24/7</Badge>
                          )}
                        </div>
                      </div>

                      {facility.specialties && (
                        <div className="mb-3">
                          <div className="flex flex-wrap gap-1">
                            {facility.specialties.map((specialty, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                        <Button size="sm" className="emergency-gradient text-white">
                          <Phone className="h-3 w-3 mr-1" />
                          Call
                        </Button>
                        <Button size="sm" variant="outline">
                          <Navigation className="h-3 w-3 mr-1" />
                          Directions
                        </Button>
                        <Button size="sm" variant="outline">
                          <Ambulance className="h-3 w-3 mr-1" />
                          Ambulance
                        </Button>
                        <Button size="sm" variant="outline">
                          <Heart className="h-3 w-3 mr-1" />
                          First Aid
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredFacilities.length === 0 && (
                <div className="text-center py-8 space-y-4">
                  <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">No facilities found nearby</h4>
                    <p className="text-muted-foreground text-sm mb-4">
                      Please contact emergency services directly or try a different location.
                    </p>
                    <div className="space-y-2">
                      <Button className="emergency-gradient text-white">
                        <Phone className="h-4 w-4 mr-2" />
                        Call Emergency Hotline
                      </Button>
                      <Button variant="outline" onClick={() => setStep('location')}>
                        Try Different Location
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default DrMasukaAssistant;