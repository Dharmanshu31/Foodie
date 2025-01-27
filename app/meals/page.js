import Link from 'next/link';
import classes from './page.module.css'
import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';
import { Suspense } from 'react';
const Meals = async () => {
    const meals = await getMeals();
    return <MealsGrid meals={meals} />
}
const MealsPage = () => {
    return (
        <>
            <header className={classes.header}>
                <h1>
                    Delicious meals, Created{' '}
                    <span className={classes.highlight}>by you</span>
                </h1>
                <p> Ye chal Jyada hero nay ban neka Yesa lage to khana bana ne ka 😋</p>
                <p className={classes.cta}>
                    <Link href='/meals/share'>
                        Chal Khana Share Kar
                    </Link>
                </p>
            </header>
            <main className={classes.main}>
                <Suspense fallback={<p className={classes.loading}>A RAHA HU BHAI SANTI RAKH</p>}>
                    <Meals />
                </Suspense>
            </main>
        </>
    )
}
export default MealsPage;