import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCompassIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCompassIcon = React.forwardRef<SVGSVGElement, TablerCompassIconProps>(function TablerCompassIcon(
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
			<path d="M8 16l2 -6l6 -2l-2 6l-6 2" />
			<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
			<path d="M12 3l0 2" />
			<path d="M12 19l0 2" />
			<path d="M3 12l2 0" />
			<path d="M19 12l2 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCompassIcon.displayName = "TablerCompassIcon";
}
