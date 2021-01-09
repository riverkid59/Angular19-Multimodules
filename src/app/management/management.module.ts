import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';
import { ManagementComponent } from './management.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { PlaylistDetailsComponent } from './playlist-details/playlist-details.component';
import { CreatePlaylistComponent } from './create-playlist/create-playlist.component';


@NgModule({
  declarations: [ManagementComponent, PlaylistsComponent, PlaylistDetailsComponent, CreatePlaylistComponent],
  imports: [
    CommonModule,
    ManagementRoutingModule
  ]
})
export class ManagementModule { }