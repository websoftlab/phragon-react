import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPhotoAiIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPhotoAiIcon = React.forwardRef<SVGSVGElement, TablerPhotoAiIconProps>(function TablerPhotoAiIcon(
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
			<path d="M10 21h-4a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5" />
			<path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l1 1" />
			<path d="M14 21v-4a2 2 0 1 1 4 0v4" />
			<path d="M14 19h4" />
			<path d="M21 15v6" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerPhotoAiIcon.displayName = "TablerPhotoAiIcon";
}
