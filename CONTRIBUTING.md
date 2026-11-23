# Contributing to Sentinel AI

Thank you for your interest in contributing to Sentinel AI! This guide outlines the development workflow, coding standards, and pull request procedures.

## Code of Conduct
We are committed to providing a welcoming, inclusive, and harassment-free environment for all contributors.

## Development Workflow
1. Fork the repository and clone your fork locally.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Follow the commit message conventions (Conventional Commits).
4. Run tests and verify builds:
   - Backend: `cd backend && npm run build`
   - Frontend: `cd frontend && npm run build`
5. Open a Pull Request referencing any open issues.

## Commit Message Convention
We adhere to [Conventional Commits](https://www.conventionalcommits.org/):
- `feat:` New functionality
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style and visual styling updates
- `refactor:` Code reorganization without behavioral changes
- `perf:` Performance improvements
- `chore:` Build process, dependencies, and configuration changes
