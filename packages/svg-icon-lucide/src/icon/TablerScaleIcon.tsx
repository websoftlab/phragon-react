import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerScaleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerScaleIcon = React.forwardRef<SVGSVGElement, TablerScaleIconProps>(function TablerScaleIcon(
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
			<path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
			<path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
			<path d="M7 21h10" />
			<path d="M12 3v18" />
			<path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerScaleIcon.displayName = "TablerScaleIcon";
}
