import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRotate3dIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRotate3dIcon = React.forwardRef<SVGSVGElement, TablerRotate3dIconProps>(function TablerRotate3dIcon(
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
			<path d="M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2" />
			<path d="m15.194 13.707 3.814 1.86-1.86 3.814" />
			<path d="M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerRotate3dIcon.displayName = "TablerRotate3dIcon";
}
