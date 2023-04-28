import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPhotoOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPhotoOffIcon = React.forwardRef<SVGSVGElement, TablerPhotoOffIconProps>(function TablerPhotoOffIcon(
	props,
	ref
) {
	const { children, ...rest } = props;
	return (
		<SvgIcon
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			{...rest}
			ref={ref}
			size={24}
			icon={undefined}
			fill="none"
		>
			<path d="M15 8h.01" />
			<path d="M7 3h11a3 3 0 0 1 3 3v11m-.856 3.099a2.991 2.991 0 0 1 -2.144 .901h-12a3 3 0 0 1 -3 -3v-12c0 -.845 .349 -1.608 .91 -2.153" />
			<path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" />
			<path d="M16.33 12.338c.574 -.054 1.155 .166 1.67 .662l3 3" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerPhotoOffIcon.displayName = "TablerPhotoOffIcon";
}
