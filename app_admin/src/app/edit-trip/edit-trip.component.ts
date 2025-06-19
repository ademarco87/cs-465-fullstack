import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-edit-trip',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-trip.component.html',
  styleUrls: ['./edit-trip.component.css']
})
export class EditTripComponent implements OnInit {
  public editForm!: FormGroup;
  trip!: Trip;
  submitted = false;
  message: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private tripDataService: TripDataService
  ) {}

  ngOnInit(): void {
    let tripCode = localStorage.getItem("tripCode");
    if (!tripCode) {
      alert("Something went wrong — tripCode not found!");
      this.router.navigate(['']);
      return;
    }

    console.log('EditTripComponent::ngOnInit');
    console.log('tripCode:', tripCode);

    this.editForm = this.formBuilder.group({
      _id: [],
      code: [tripCode, Validators.required],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required]
    });

    this.tripDataService.getTrip(tripCode)
      .subscribe({
        next: (value: any) => {
          this.trip = value;
          this.editForm.patchValue(value);
          this.message = value ? `Trip ${tripCode} retrieved` : 'No Trip Retrieved!';
          console.log(this.message);
        },
        error: (error: any) => {
          console.log('Error retrieving trip:', error);
        }
      });
  }

    public onSubmit() {
    this.submitted = true;

    console.log('Form submit triggered'); // ✅ Debug

    if (this.editForm.invalid) {
      console.warn('Form is invalid:', this.editForm); // ✅ Debug
      return;
    }

    // Optional: Merge with original trip to support partial edits
    const updatedTrip = { ...this.trip, ...this.editForm.value };

    this.tripDataService.updateTrip(updatedTrip).subscribe({
      next: (value: any) => {
        console.log('Trip updated:', value);
        this.router.navigate(['']);
      },
      error: (error: any) => {
        console.log('Update error:', error);
      }
    });
  }

  get f() {
    return this.editForm.controls;
  }
}
