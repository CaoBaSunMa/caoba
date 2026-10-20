//Image
import mock1 from '@/assets/img/gallery/mock1.jpg';
import mock2 from '@/assets/img/gallery/mock2.jpg';
import mock3 from '@/assets/img/gallery/mock3.jpg';
import mock4 from '@/assets/img/gallery/mock4.jpg';
import mock5 from '@/assets/img/gallery/mock5.jpg';
import mock6 from '@/assets/img/gallery/mock6.jpg';
import mock7 from '@/assets/img/gallery/mock7.jpg';
import mock8 from '@/assets/img/gallery/mock8.jpg';
import mock9 from '@/assets/img/gallery/mock9.jpg';
import mock10 from '@/assets/img/gallery/mock10.jpg';
import mock11 from '@/assets/img/gallery/mock11.jpg';
import mock12 from '@/assets/img/gallery/mock12.jpg';
import mock13 from '@/assets/img/gallery/mock13.jpg';
import mock14 from '@/assets/img/gallery/mock14.jpg';
import mock15 from '@/assets/img/gallery/mock15.jpg';

export const gallery = [
    {
        date: "最近分配",
        collapseId: "recently_assigned",
        images: [
            { id: 1, type: 'image', src: mock1, stared: true },
            { id: 2, type: 'image', src: mock2, stared: false },
            { id: 3, type: 'image', src: mock3, stared: false },
            { id: 4, type: 'image', src: mock4, stared: false },
            { id: 5, type: 'image', src: mock5, stared: true },
            { id: 6, type: 'video', src: 'https://www.youtube.com/watch?v=BvXR97eR1QE', poster: mock6, stared: true },
        ]
    },
    {
        date: "11月20日",
        collapseId: "november_20",
        images: [
            { id: 1, type: 'image', src: mock6, stared: true },
            { id: 2, type: 'image', src: mock7, stared: false },
            { id: 3, type: 'image', src: mock8, stared: false },
            { id: 4, type: 'image', src: mock9, stared: false },
            { id: 5, type: 'image', src: mock10, stared: true },
            { id: 6, type: 'video', src: 'https://www.youtube.com/watch?v=BvXR97eR1QE', poster: mock1, stared: true },
        ]
    },
    {
        date: "10月20日",
        collapseId: "october_20",
        images: [
            { id: 1, type: 'image', src: mock11, stared: true },
            { id: 2, type: 'image', src: mock12, stared: false },
            { id: 3, type: 'image', src: mock13, stared: false },
            { id: 4, type: 'image', src: mock14, stared: false },
            { id: 5, type: 'image', src: mock15, stared: true },
            { id: 6, type: 'video', src: 'https://www.youtube.com/watch?v=BvXR97eR1QE', poster: mock12, stared: true },
        ]
    },
]