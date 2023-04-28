import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLighterIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLighterIcon = React.forwardRef<SVGSVGElement, TablerLighterIconProps>(function TablerLighterIcon(
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
			<path d="M10 3v16a2 2 0 0 0 2 2h5a2 2 0 0 0 2 -2v-7h-12a2 2 0 0 1 -2 -2v-5a2 2 0 0 1 2 -2h3z" />
			<path d="M16 4l1.465 1.638a2 2 0 1 1 -3.015 .099l1.55 -1.737z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLighterIcon.displayName = "TablerLighterIcon";
}
