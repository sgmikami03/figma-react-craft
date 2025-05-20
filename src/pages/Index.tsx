
import { useState } from 'react';
import { Button } from '@/components/custom/Button';
import { Checkbox } from '@/components/custom/Checkbox';
import { Dropdown } from '@/components/custom/Dropdown';
import { Input } from '@/components/custom/Input';
import { RadioButton } from '@/components/custom/RadioButton';

const Index = () => {
  const [selectedRadio, setSelectedRadio] = useState<string>('option1');
  const dropdownOptions = [
    { label: 'Dropdown option', value: 'option1' },
    { label: 'Dropdown option 1', value: 'option2' },
    { label: 'Dropdown option 2', value: 'option3' }
  ];

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">UI Components</h1>
        
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <Button>Go</Button>
            <Button variant="secondary">Clear</Button>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Checkboxes</h2>
          <div className="flex flex-col gap-4">
            <Checkbox id="checkbox1" aria-label="Unchecked" />
            <Checkbox id="checkbox2" aria-label="Checked" defaultChecked />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Dropdown</h2>
          <div className="space-y-6 max-w-md">
            <Dropdown 
              label="Dropdown Label" 
              options={dropdownOptions} 
            />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Inputs</h2>
          <div className="space-y-6 max-w-md">
            <Input label="Input Text Label" placeholder="Type here" />
            <Input 
              label="Input Text Label" 
              defaultValue="Typing" 
              aria-activedescendant="active" 
              helperText="Assistive Text" 
            />
            <Input 
              label="Input Text Label" 
              defaultValue="Typing" 
              error="Error message informing me of a problem" 
            />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Radio Buttons</h2>
          <div className="flex flex-col gap-4">
            <RadioButton 
              name="radioGroup" 
              value="option1" 
              checked={selectedRadio === 'option1'} 
              onChange={(e) => setSelectedRadio(e.target.value)} 
              label="Radio selection" 
            />
            <RadioButton 
              name="radioGroup" 
              value="option2" 
              checked={selectedRadio === 'option2'} 
              onChange={(e) => setSelectedRadio(e.target.value)} 
              label="Radio selection" 
            />
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Japanese Text</h2>
          <div className="space-y-4">
            <p className="text-lg">サンプルタイトル</p>
            <p className="text-lg">サンプルタイトル</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
