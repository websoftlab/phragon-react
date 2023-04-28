import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPokeballIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPokeballIcon = React.forwardRef<SVGSVGElement, TablerPokeballIconProps>(function TablerPokeballIcon(
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
			<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
			<path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
			<path d="M3 12h6" />
			<path d="M15 12h6" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerPokeballIcon.displayName = "TablerPokeballIcon";
}
