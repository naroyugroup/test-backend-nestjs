import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import config from "./config/config";
import { AuthenticationModule } from "./modules/authentication/authentication.module";
import { CalendarsModule } from "./modules/calendars/calendars.module";
import { GoogleCalendarModule } from "./modules/google-calendar/google-calendar.module";
import { UsersModule } from "./modules/users/users.module";

@Module({
	imports: [
		ConfigModule.forRoot({
			load: [config],
			isGlobal: true,
		}),
		UsersModule,
		CalendarsModule,
		AuthenticationModule,
		GoogleCalendarModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
