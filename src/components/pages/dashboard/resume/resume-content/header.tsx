import { Button } from "@/components/ui/button"
import { ToolTip } from "@/components/ui/tooltip"
import { Copy, Download, Home, Trash } from "lucide-react"
import Link from "next/link"

export const NavigationHeader = () => {
    return (
        <header className="absolute w-full left-0 top-0 z-10 p-2 bg-background border-b border-muted flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
                <ToolTip content="Voltar ao painel">
                    <Link href="/dashboard/resumes" passHref>
                        <Button
                            variant="secondary"
                            className="w-8 h-8 bg-transparent"
                            size="icon"
                        >
                            <Home size={18} />
                        </Button>
                    </Link>
                </ToolTip>

                <span className="text-muted-foreground">/</span>
                <p className="text-lg font-title font-bold ml-1">Título do currículo</p>
            </div>
            <div className="flex gap-1">
                <ToolTip content="Deletar Currículo">
                    <Button
                        variant="secondary"
                        className="w-8 h-8 bg-transparent"
                        size="icon"
                    >
                        <Trash size={18} />
                    </Button>
                </ToolTip>

                <ToolTip content="Duplicar Currículo">
                    <Button
                        variant="secondary"
                        className="w-8 h-8 bg-transparent"
                        size="icon"
                    >
                        <Copy size={18} />
                    </Button>
                </ToolTip>

                <ToolTip content="Baixar PDF">
                    <Button
                        variant="secondary"
                        className="w-8 h-8 bg-transparent"
                        size="icon"
                    >
                        <Download size={18} />
                    </Button>
                </ToolTip>
            </div>
        </header>
    )
}