import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function Main() {
    return (
        <div className="w-screen h-screen flex justify-center items-center bg-zinc-900">
            <Card className="w-3/5 h-2/5 flex flex-col justify-end items-center bg-gradient">
                <Button className="my-2.5 w-1/5"> Shadcn </Button>
            </Card>
        </div>
    );
}