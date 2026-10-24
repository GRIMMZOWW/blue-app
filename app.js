<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>AWS DevOps Lab • Node.js Deployed</title>
  
  <!-- Tailwind CSS via CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- Google Fonts: Inter -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">

  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
          },
          colors: {
            neutral: {
              50: '#fbfbfb',
              100: '#f4f4f5',
              200: '#e4e4e7',
              300: '#d4d4d8',
              500: '#71717a',
              700: '#3f3f46',
              800: '#27272a',
              900: '#18181b',
              950: '#0f172a',
            },
            amber: {
              500: '#f59e0b',
              600: '#d97706',
            }
          }
        }
      }
    }
  </script>

  <style>
    /* Custom toast animation */
    #toast {
      transition: opacity 0.25s ease, transform 0.25s ease;
    }
    .toast-hidden {
      opacity: 0;
      transform: translateY(8px);
      pointer-events: none;
    }
    .toast-visible {
      opacity: 1;
      transform: translateY(0);
    }
  </style>
</head>

<body class="bg-neutral-50 text-neutral-950 font-sans min-h-screen flex flex-col justify-between antialiased selection:bg-amber-500/20 selection:text-neutral-900">

  <!-- Header -->
  <header class="w-full max-w-3xl mx-auto px-6 pt-10 sm:pt-14 pb-4 flex items-center justify-between">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 text-neutral-700 border border-neutral-200">
      <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
      <span>AWS DevOps Lab</span>
      <span class="text-neutral-300">•</span>
      <span class="text-neutral-500">ITVedant / TCET</span>
    </div>

    <span class="text-xs font-medium text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60 inline-flex items-center gap-1.5">
      <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
      Active
    </span>
  </header>

  <!-- Main Content Area -->
  <main class="w-full max-w-3xl mx-auto px-6 py-6 flex-grow flex flex-col justify-center">
    
    <!-- Hero Box Card -->
    <div class="bg-white rounded-2xl border border-neutral-200/80 p-8 sm:p-12 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all">
      
      <!-- Heading & Description -->
      <div class="max-w-xl">
        <h1 class="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 leading-snug">
          Node.js Application Live
        </h1>
        <p class="mt-3 text-neutral-600 text-sm sm:text-base leading-relaxed">
          Successfully deployed via GitHub and AWS CodeBuild to AWS Elastic Beanstalk.
        </p>
      </div>

      <hr class="my-8 border-neutral-100" />

      <!-- Key Details Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 text-xs">
        <div>
          <dt class="text-neutral-500 font-medium mb-1">Deployment Source</dt>
          <dd class="text-neutral-900 font-semibold flex items-center gap-1.5">
            <svg class="w-4 h-4 text-neutral-700" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
            GitHub (TCET Blue-app)
          </dd>
        </div>

        <div>
          <dt class="text-neutral-500 font-medium mb-1">Build Engine</dt>
          <dd class="text-neutral-900 font-semibold flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-amber-500"></span>
            AWS CodeBuild
          </dd>
        </div>

        <div>
          <dt class="text-neutral-500 font-medium mb-1">Target Environment</dt>
          <dd class="text-neutral-900 font-semibold">AWS Elastic Beanstalk</dd>
        </div>

        <div>
          <dt class="text-neutral-500 font-medium mb-1">Status</dt>
          <dd class="text-neutral-900 font-semibold">Production</dd>
        </div>
      </div>

      <!-- Actions -->
      <div class="mt-8 pt-6 border-t border-neutral-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/Welcome.html" 
           target="_blank" 
           rel="noopener noreferrer"
           class="inline-flex items-center justify-center font-medium text-xs bg-neutral-950 hover:bg-neutral-800 text-white px-5 py-3 rounded-lg transition-colors duration-150 shadow-sm">
          AWS Beanstalk Documentation
          <svg class="w-3.5 h-3.5 ml-2 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
        </a>

        <button onclick="copyDeploymentInfo()" 
                class="inline-flex items-center justify-center font-medium text-xs bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-200 px-5 py-3 rounded-lg transition-colors duration-150">
          <svg class="w-3.5 h-3.5 mr-2 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
          Copy Deployment Info
        </button>
      </div>

    </div>
  </main>

  <!-- Toast Notification Feedback -->
  <div id="toast" class="toast-hidden fixed bottom-6 left-1/2 -translate-x-1/2 bg-neutral-950 text-white text-xs px-4 py-2.5 rounded-lg shadow-lg font-medium flex items-center gap-2 z-50">
    <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
    Deployment info copied to clipboard
  </div>

  <!-- Footer -->
  <footer class="w-full max-w-3xl mx-auto px-6 py-8 text-center sm:text-left border-t border-neutral-200/50">
    <div class="flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-2">
      <p>Deployed by TCET Team • AWS DevOps Lab</p>
      <p>© 2026</p>
    </div>
  </footer>

  <!-- Simple Clipboard logic -->
  <script>
    function copyDeploymentInfo() {
      const textToCopy = `AWS DevOps Lab Deployment Summary
Source: GitHub (TCET Blue-app)
Build Engine: AWS CodeBuild
Environment: AWS Elastic Beanstalk
Status: Active / Production
Lab: ITVedant / TCET`;

      // Fallback for iFrame restrictions
      const textArea = document.createElement("textarea");
      textArea.value = textToCopy;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);

      // Trigger visual toast
      const toast = document.getElementById("toast");
      toast.classList.remove("toast-hidden");
      toast.classList.add("toast-visible");

      setTimeout(() => {
        toast.classList.remove("toast-visible");
        toast.classList.add("toast-hidden");
      }, 2500);
    }
  </script>

</body>
</html>
