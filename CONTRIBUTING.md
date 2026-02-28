# Contributing to AgentDeadlines

Thanks for helping keep the AI Agent community informed! Adding an event takes just a few minutes.

## Adding a New Event

### 1. Fork & Clone

```bash
git clone https://github.com/<your-username>/agentdeadlines.git
cd agentdeadlines
```

### 2. Edit `data/events.yaml`

Add your event at the end of the file following this schema:

```yaml
- id: unique-event-id-2026          # lowercase, kebab-case, include year
  title: "Short Event Name"          # Display title (keep it concise)
  full_name: "Full Official Name"    # Full name with organizer context
  organizer: "Organizer Name"
  url: "https://event-link.com"      # Official event page
  deadline: "2026-06-30 23:59"       # YYYY-MM-DD HH:mm format
  timezone: "UTC"                    # UTC, US/Pacific, US/Eastern, etc.
  start_date: "2026-06-01"
  end_date: "2026-06-30"
  prize: "$10,000"                   # Prize description or "TBD"
  categories:                        # One or more: hackathon, competition, benchmark
    - hackathon
  format: "online"                   # online, in-person, or hybrid
  platform: "devpost"                # Platform name (lowercase)
  tags:                              # 2-4 relevant tags
    - agent
    - LLM
  note: "Brief description"          # One-liner about the event
```

### 3. Validate

```bash
pnpm install
pnpm dev
```

Check that your event appears correctly at [http://localhost:3000](http://localhost:3000).

### 4. Submit a PR

- Create a branch: `git checkout -b add/event-name`
- Commit: `git commit -m "data: add Event Name"`
- Push & open a Pull Request

## Field Reference

| Field | Required | Description |
|-------|----------|-------------|
| `id` | Yes | Unique identifier (kebab-case with year) |
| `title` | Yes | Short display name |
| `full_name` | Yes | Full official event name |
| `organizer` | Yes | Organization running the event |
| `url` | Yes | Link to official event page |
| `deadline` | Yes | Submission deadline (`YYYY-MM-DD HH:mm`) |
| `timezone` | Yes | Timezone for the deadline |
| `start_date` | Yes | Event start date (`YYYY-MM-DD`) |
| `end_date` | Yes | Event end date (`YYYY-MM-DD`) |
| `prize` | Yes | Prize description |
| `categories` | Yes | Array of: `hackathon`, `competition`, `benchmark` |
| `format` | Yes | One of: `online`, `in-person`, `hybrid` |
| `platform` | Yes | Hosting platform (lowercase) |
| `tags` | Yes | Array of relevant tags (2-4) |
| `note` | Yes | One-line event description |

## Guidelines

- Only add **AI Agent related** events (hackathons, competitions, benchmarks)
- Verify the event URL is valid and accessible
- Use UTC timezone when possible; otherwise specify the correct timezone
- Keep notes concise (one sentence)
- Do not modify existing events unless correcting errors
