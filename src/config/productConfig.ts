import type { Product } from '../types';

export const productConfig: Product[] = [
  {
    id: 'raw-forest-honey',
    name: 'Raw Forest Honey',
    category: 'Honey',
    price: 18.50,
    rating: 4.9,
    image: '/assets/images/raw-forest-honey.jpg',
    description: '100% raw, unpasteurized honey sourced directly from wild hives in deep deciduous forests. Retains all natural pollen, enzymes, and medicinal properties.',
    features: ['Wild-harvested', 'Coarse filtered', 'No added sugar', 'Zero additives'],
    transparency: {
      origin: 'Deciduous Forests, Western Ghats, India',
      harvested: 'Late Spring, Wild combs by local tribal communities',
      processing: 'Cold gravity filtered to preserve natural enzymes. Unheated.'
    }
  },
  {
    id: 'pure-a2-cow-ghee',
    name: 'Pure A2 Cow Ghee',
    category: 'Ghee',
    price: 24.00,
    rating: 4.8,
    image: '/assets/images/a2-cow-ghee.jpg',
    description: 'Traditional Bilona method ghee churned from A2 curd of free-grazing Hallikar cows. A rich source of vitamins, healthy fats, and aromatic flavor.',
    features: ['Hallikar A2 milk', 'Wood-fired boiling', 'Hand-churned (Bilona)', 'Rich in butyric acid'],
    transparency: {
      origin: 'Nanntu Co-op Farm pastures, Mandya',
      harvested: 'Daily milking, churned in small bi-weekly batches',
      processing: 'Curd-based slow clarification in clay vessels over wood fire.'
    }
  },
  {
    id: 'cold-pressed-mustard-oil',
    name: 'Cold Pressed Mustard Oil',
    category: 'Oils',
    price: 14.50,
    rating: 4.7,
    image: '/assets/images/cold-pressed-mustard.jpg',
    description: 'Traditionally extracted cold-pressed mustard oil, high in monounsaturated fats. Retains natural pungent aroma and health benefits.',
    features: ['Wood-pressed (Kachi Ghani)', 'Sun-dried seeds', 'Non-refined', 'Chemical-free extraction'],
    transparency: {
      origin: 'Dryland organic farms, Rajasthan border',
      harvested: 'Winter mustard crop, sun-cured for 2 weeks',
      processing: 'Extracted using organic Vagai wood pestles under 40°C.'
    }
  },
  {
    id: 'wildflower-infusion-honey',
    name: 'Wildflower Infusion Honey',
    category: 'Honey',
    price: 19.99,
    rating: 4.9,
    image: '/assets/images/wildflower-honey.jpg',
    description: 'Sourced during the peak blossom season, this honey blends nectar from over 20 wild meadow flowers for a light, floral, and sweet taste.',
    features: ['Single-source apiary', 'Rich in antioxidants', 'No heat treatment', 'Bee-friendly harvesting'],
    transparency: {
      origin: 'Highland Meadows, Shimla Foothills',
      harvested: 'Early Autumn flower bloom',
      processing: 'Decanted naturally to separate wax, bottling under clean room standards.'
    }
  },
  {
    id: 'organic-ashwagandha-honey',
    name: 'Ashwagandha Honey Blend',
    category: 'Honey',
    price: 22.50,
    rating: 4.8,
    image: '/assets/images/ashwagandha-honey.jpg',
    description: 'Premium raw forest honey infused with organic Ashwagandha root extract. A potent adaptogenic formulation for stress relief and energy.',
    features: ['Infused with organic herbs', 'Adaptogenic wellness', 'No artificial flavorings', 'Triple tested'],
    transparency: {
      origin: 'Honey: Western Ghats; Ashwagandha: Certified farms in MP',
      harvested: 'Infused over 30 days under solar heat cycles',
      processing: 'Slow herbal maceration without exposing honey to boiling temperatures.'
    }
  },
  {
    id: 'beeswax-balm-set',
    name: 'Handcrafted Beeswax Balm Set',
    category: 'Wellness',
    price: 12.00,
    rating: 4.6,
    image: '/assets/images/beeswax-balms.jpg',
    description: 'All-natural skin and lip balms formulated with triple-filtered wild beeswax, cold-pressed coconut oil, and organic essential oils.',
    features: ['100% biodegradable', 'No petroleum or parabens', 'Soothing hydration', 'Fragrance from essential oils'],
    transparency: {
      origin: 'Wild forest honeycomb cap-wax',
      harvested: 'Post-honey extraction comb collection',
      processing: 'Clean solar-melted filtering, hand poured into recyclable metal tins.'
    }
  }
];
