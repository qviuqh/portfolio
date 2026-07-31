import langChainIcon from 'simple-icons/icons/langchain.svg'
import fastApiIcon from 'simple-icons/icons/fastapi.svg'
import flaskIcon from 'simple-icons/icons/flask.svg'
import pydanticIcon from 'simple-icons/icons/pydantic.svg'
import pyTorchIcon from 'simple-icons/icons/pytorch.svg'
import huggingFaceIcon from 'simple-icons/icons/huggingface.svg'
import qdrantIcon from 'simple-icons/icons/qdrant.svg'
import ollamaIcon from 'simple-icons/icons/ollama.svg'
import vllmIcon from 'simple-icons/icons/vllm.svg'
import minioIcon from 'simple-icons/icons/minio.svg'
import postgresIcon from 'simple-icons/icons/postgresql.svg'
import redisIcon from 'simple-icons/icons/redis.svg'
import qtIcon from 'simple-icons/icons/qt.svg'
import reactIcon from 'simple-icons/icons/react.svg'
import viteIcon from 'simple-icons/icons/vite.svg'
import dockerIcon from 'simple-icons/icons/docker.svg'
import githubActionsIcon from 'simple-icons/icons/githubactions.svg'
import weightsBiasesIcon from 'simple-icons/icons/weightsandbiases.svg'
import pytestIcon from 'simple-icons/icons/pytest.svg'
import postmanIcon from 'simple-icons/icons/postman.svg'
import claudeCodeIcon from 'simple-icons/icons/claudecode.svg'
import cursorIcon from 'simple-icons/icons/cursor.svg'
import jwtIcon from 'simple-icons/icons/jsonwebtokens.svg'

const TECHNOLOGIES = [
  { name: 'OpenAI ADK', mark: 'ADK' },
  { name: 'LangChain', icon: langChainIcon },
  { name: 'FastAPI', icon: fastApiIcon },
  { name: 'Flask', icon: flaskIcon },
  { name: 'Pydantic', icon: pydanticIcon },
  { name: 'PyTorch', icon: pyTorchIcon },
  { name: 'Hugging Face Transformers', icon: huggingFaceIcon },
  { name: 'Qdrant', icon: qdrantIcon },
  { name: 'FAISS', mark: 'FS' },
  { name: 'BM25', mark: '25' },
  { name: 'FastEmbed', mark: 'FE' },
  { name: 'Ollama', icon: ollamaIcon },
  { name: 'vLLM', icon: vllmIcon },
  { name: 'LlamaParse', mark: 'LP' },
  { name: 'MinIO', icon: minioIcon },
  { name: 'PostgreSQL', icon: postgresIcon },
  { name: 'Redis', icon: redisIcon },
  { name: 'PyQt5', icon: qtIcon },
  { name: 'React', icon: reactIcon },
  { name: 'Vite', icon: viteIcon },
  { name: 'Docker', icon: dockerIcon },
  { name: 'GitHub Actions', icon: githubActionsIcon },
  { name: 'AWS SDK', mark: 'AWS' },
  { name: 'Weights & Biases', icon: weightsBiasesIcon },
  { name: 'Langfuse', mark: 'LF' },
  { name: 'PyTest', icon: pytestIcon },
  { name: 'Postman', icon: postmanIcon },
  { name: 'Claude Code', icon: claudeCodeIcon },
  { name: 'Cursor', icon: cursorIcon },
  { name: 'JWT (python-jose)', icon: jwtIcon },
  { name: 'Bcrypt', mark: 'BC' },
  { name: 'ResNet50', mark: 'R50' },
  { name: 'BERT', mark: 'BT' },
  { name: 'CLIP', mark: 'CL' },
]

function ToolMark({ icon, mark }) {
  if (icon) {
    return <img src={icon} alt="" className="h-8 w-8 shrink-0 brightness-0" aria-hidden="true" />
  }

  return (
    <svg
      aria-hidden="true"
      className="h-8 w-8 shrink-0 text-black"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 2.75 34.94 11.38v17.24L20 37.25 5.06 28.62V11.38L20 2.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="20" cy="4.1" r="1.8" fill="currentColor" />
      <circle cx="34" cy="28.1" r="1.8" fill="currentColor" />
      <circle cx="6" cy="28.1" r="1.8" fill="currentColor" />
      <text
        x="20"
        y="20.6"
        fill="currentColor"
        fontFamily="Inter, Arial, sans-serif"
        fontSize={mark.length > 2 ? 7.2 : 9.5}
        fontWeight="800"
        letterSpacing="-.25"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {mark}
      </text>
    </svg>
  )
}

function TechnologyList({ hidden = false }) {
  return (
    <div
      className="technology-marquee__copy flex shrink-0 items-center gap-9 pr-9 sm:gap-12 sm:pr-12 lg:gap-16 lg:pr-16"
      aria-hidden={hidden || undefined}
    >
      {TECHNOLOGIES.map(({ name, icon, mark }) => (
        <div
          key={name}
          className="group flex shrink-0 items-center gap-3 text-black"
          role={hidden ? undefined : 'listitem'}
        >
          <span className="transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
            <ToolMark icon={icon} mark={mark} />
          </span>
          <span className="whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.14em] sm:text-xs">
            {name}
          </span>
        </div>
      ))}
    </div>
  )
}

export default function TechnologyMarquee() {
  return (
    <section
      data-reveal
      className="technology-marquee relative w-full overflow-hidden border-t border-foreground/10 py-6 sm:py-7 md:py-8"
      aria-label="Tools and frameworks"
    >
      <div className="technology-marquee__track flex w-max items-center" role="list">
        <TechnologyList />
        <TechnologyList hidden />
      </div>
    </section>
  )
}
