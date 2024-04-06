FROM mcr.microsoft.com/playwright:v1.42.1-jammy

# Copy project
COPY . /home/lotto24

WORKDIR /home/lotto24

# Install dependencies
RUN npm i
# Install browsers
RUN npx playwright install

# Run playwright test
CMD [ "npx", "playwright", "test" ]