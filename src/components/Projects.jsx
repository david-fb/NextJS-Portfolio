import styles from '@styles/Projects.module.scss';
import CardList from './CardList';

const projects = [
  {
    id: 1,
    title: "Kids' Store",
    description: "Project made based on Platzi's JavaScript school project (YARD Sale) where the Back-end and Front-end were created",
    technologies: ['NextJS', 'SCSS', 'NodeJS', 'PostgreSQL', 'Sequelize', 'JWT', 'NextAuth', 'Git'],
    images: [
      'https://firebasestorage.googleapis.com/v0/b/test-bc4fd.appspot.com/o/projects%2Fstore-1.png?alt=media&token=15caf5ab-62dd-4363-9585-876b045d983c',
      'https://firebasestorage.googleapis.com/v0/b/test-bc4fd.appspot.com/o/projects%2Fstore-2.png?alt=media&token=5b274693-9c5f-4e8c-9e57-7e814fee1657',
      'https://firebasestorage.googleapis.com/v0/b/test-bc4fd.appspot.com/o/projects%2Fstore-3.png?alt=media&token=e0b5a58d-6fb9-4c77-8c0f-dcdc95f20e5e',
      'https://firebasestorage.googleapis.com/v0/b/test-bc4fd.appspot.com/o/projects%2Fstore-4.png?alt=media&token=dd9f1fcc-fb20-4fa5-ae95-9206301c28b7',
      'https://firebasestorage.googleapis.com/v0/b/test-bc4fd.appspot.com/o/projects%2Fstore-5.png?alt=media&token=6d6e9319-073f-4d5f-8670-fb1b1bfa1e48',
      'https://firebasestorage.googleapis.com/v0/b/test-bc4fd.appspot.com/o/projects%2Fstore-6.png?alt=media&token=b7729011-7c14-4baa-80b6-7c7da43b0838',
      'https://firebasestorage.googleapis.com/v0/b/test-bc4fd.appspot.com/o/projects%2Fstore-7.png?alt=media&token=782b57d5-1736-4f94-aeb8-6e05352cf234',
      'https://firebasestorage.googleapis.com/v0/b/test-bc4fd.appspot.com/o/projects%2Fstore-8.png?alt=media&token=a6618dcb-8105-4e08-8504-1ff8d095953b',
    ],
    liveWeb: 'https://store-nextjs-ten.vercel.app',
    area: ['Front-end', 'Back-end'],
  },
  {
    id: 2,
    title: 'Clothes Catalogue',
    description: 'Personal project to show available clothing catalog, which has a login system to be able to add, edit, and delete an item. It also allows you to download the image',
    technologies: ['VueJS', 'CSS', 'Microservices', 'DjangoRF', 'Firebase', 'SpringBoot', 'GraphQL', 'JWT', 'Git'],
    images: [
      'https://firebasestorage.googleapis.com/v0/b/test-bc4fd.appspot.com/o/projects%2FCatalogue-1.png?alt=media&token=8d5ef255-ec65-474d-9c6c-5425033463a5',
      'https://firebasestorage.googleapis.com/v0/b/test-bc4fd.appspot.com/o/projects%2FCatalogue-2.png?alt=media&token=246b1147-fb75-423c-9b7a-4e7fc1e851d6',
      'https://firebasestorage.googleapis.com/v0/b/test-bc4fd.appspot.com/o/projects%2FCatalogue-3.png?alt=media&token=22e6ee23-5f6d-45ce-a016-8089feca2342',
      'https://firebasestorage.googleapis.com/v0/b/test-bc4fd.appspot.com/o/projects%2FCatalogue-4.png?alt=media&token=1d8d1bc1-fa9e-4a4d-838c-c83c81031a42',
      'https://firebasestorage.googleapis.com/v0/b/test-bc4fd.appspot.com/o/projects%2FCatalogue-5.png?alt=media&token=dc8ef12e-77e8-433f-82f5-1ddc3d996134',
    ],
    liveWeb: 'https://col-inventario-web.vercel.app',
    area: ['Front-end', 'Back-end'],
  },
  {
    id: 3,
    title: 'CliniPet',
    description:
      'Project carried out in the program MisionTic2022 cycle 4. It is a system for a veterinary in which we can register users with different roles. Users can add pets and request appointments. The app was Developed with the SCRUM methodology',
    technologies: ['VueJS', 'Tailwind', 'Microservices', 'MongoDB', 'PostgreSQL', 'DjangoRF', 'SpringBoot', 'GraphQL', 'JWT', 'Git'],
    images: [
      'https://firebasestorage.googleapis.com/v0/b/test-bc4fd.appspot.com/o/projects%2FCliniPet-1.png?alt=media&token=4a27c848-fa91-495f-95f4-2812bd30f23d',
      'https://firebasestorage.googleapis.com/v0/b/test-bc4fd.appspot.com/o/projects%2FCliniPet-2.png?alt=media&token=be7aec0c-1858-4808-a56f-7bd32f375960',
      'https://firebasestorage.googleapis.com/v0/b/test-bc4fd.appspot.com/o/projects%2FCliniPet-3.png?alt=media&token=458b4e57-b529-46d2-8b4c-836e6d30d274',
      'https://firebasestorage.googleapis.com/v0/b/test-bc4fd.appspot.com/o/projects%2FCliniPet-4.png?alt=media&token=df5b9a7b-4807-4835-a3dc-ebe7f386a270',
      'https://firebasestorage.googleapis.com/v0/b/test-bc4fd.appspot.com/o/projects%2FCliniPet-5.png?alt=media&token=a582255f-2e7d-4e62-a19c-2612cfaeb142',
    ],
    youtube: 'https://www.youtube.com/watch?v=KugsqdGCLOc',
    liveWeb: 'https://clinipet-web.herokuapp.com/',
    area: ['Front-end', 'Back-end'],
  },
  {
    id: 4,
    title: 'Pharmacy Inventory',
    description:
      'Project carried out in the program MisionTic2022 cycle 3. It is a system for a pharmaceutical chain in which we can have different branches with their respective inventories and administrator, it allows us to place orders',
    technologies: ['VueJS', 'CSS', 'DjangoRF', 'PostgreSQL', 'JWT', 'Git'],
    images: [
      'https://firebasestorage.googleapis.com/v0/b/test-bc4fd.appspot.com/o/projects%2FPharmacy-1.png?alt=media&token=a89f22cb-8c4b-4814-8bb2-39066cce3098',
      'https://firebasestorage.googleapis.com/v0/b/test-bc4fd.appspot.com/o/projects%2FPharmacy-2.png?alt=media&token=ae4f6d87-bcd4-4026-a8c5-eaa1665e1bf9',
      'https://firebasestorage.googleapis.com/v0/b/test-bc4fd.appspot.com/o/projects%2FPharmacy-3.png?alt=media&token=0beafc5f-240a-4694-a331-25225f1ef99c',
      'https://firebasestorage.googleapis.com/v0/b/test-bc4fd.appspot.com/o/projects%2FPharmacy-4.png?alt=media&token=7eb314dd-8feb-4181-bd57-01dbc3bffc4c',
      'https://firebasestorage.googleapis.com/v0/b/test-bc4fd.appspot.com/o/projects%2FPharmacy-5.png?alt=media&token=76e35d65-7ffb-480d-a829-05d605e49116',
      'https://firebasestorage.googleapis.com/v0/b/test-bc4fd.appspot.com/o/projects%2FPharmacy-6.png?alt=media&token=3d0acb6c-ce7b-4f24-9a8b-6e19b7a4d99d',
    ],
    youtube: 'https://www.youtube.com/watch?v=ZmmRqVCttZk',
    liveWeb: 'https://farmaciabeta-fe.herokuapp.com/',
    area: ['Front-end', 'Back-end'],
  },
];

export default function Projects() {
  return (
    <section className={`PageSection ${styles['Projects']}`} id="Projects">
      <h2 className={styles['Projects__title']}>Recent works</h2>
      <CardList projects={projects} />
    </section>
  );
}
