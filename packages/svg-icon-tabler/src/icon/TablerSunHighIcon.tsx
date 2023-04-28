import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSunHighIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSunHighIcon = React.forwardRef<SVGSVGElement, TablerSunHighIconProps>(function TablerSunHighIcon(
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
			<path d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z" />
			<path d="M6.343 17.657l-1.414 1.414" />
			<path d="M6.343 6.343l-1.414 -1.414" />
			<path d="M17.657 6.343l1.414 -1.414" />
			<path d="M17.657 17.657l1.414 1.414" />
			<path d="M4 12h-2" />
			<path d="M12 4v-2" />
			<path d="M20 12h2" />
			<path d="M12 20v2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSunHighIcon.displayName = "TablerSunHighIcon";
}
