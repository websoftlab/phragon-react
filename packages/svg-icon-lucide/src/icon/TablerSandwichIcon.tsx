import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSandwichIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSandwichIcon = React.forwardRef<SVGSVGElement, TablerSandwichIconProps>(function TablerSandwichIcon(
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
			<path d="M3 11v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3" />
			<path d="M12 19H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3.83" />
			<path d="m3 11 7.77-6.04a2 2 0 0 1 2.46 0L21 11H3Z" />
			<path d="M12.97 19.77 7 15h12.5l-3.75 4.5a2 2 0 0 1-2.78.27Z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSandwichIcon.displayName = "TablerSandwichIcon";
}
