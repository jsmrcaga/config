FROM python:3.12.14-slim

RUN useradd -m -s /bin/bash skills_ref_user\
	&& groupadd skills_ref_group\
	&& usermod -aG skills_ref_group skills_ref_user

WORKDIR /app

# Make sure `/app` is usable by users
# in group `skills_ref_group`
RUN chown -R skills_ref_user:skills_ref_group /app

RUN apt-get update\
	&& apt-get install -y git\
	&& rm -rf /var/lib/apt/lists/*


RUN git clone https://github.com/agentskills/agentskills.git

RUN cd /app/agentskills/skills-ref\
	&& pip install --no-cache-dir -e .

# We create a user and set it to this so that
# pip install -e installs this in this user's
# environment
USER skills_ref_user

ENTRYPOINT ["/usr/local/bin/skills-ref"]
