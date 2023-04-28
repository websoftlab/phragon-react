import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBalloonIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBalloonIcon = React.forwardRef<SVGSVGElement, TablerBalloonIconProps>(function TablerBalloonIcon(
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
			<path d="M14 8a2 2 0 0 0 -2 -2" />
			<path d="M6 8a6 6 0 1 1 12 0c0 4.97 -2.686 9 -6 9s-6 -4.03 -6 -9" />
			<path d="M12 17v1a2 2 0 0 1 -2 2h-3a2 2 0 0 0 -2 2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBalloonIcon.displayName = "TablerBalloonIcon";
}
