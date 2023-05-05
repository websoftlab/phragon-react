import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSofaIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSofaIcon = React.forwardRef<SVGSVGElement, TablerSofaIconProps>(function TablerSofaIcon(props, ref) {
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
			<path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" />
			<path d="M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z" />
			<path d="M4 18v2" />
			<path d="M20 18v2" />
			<path d="M12 4v9" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSofaIcon.displayName = "TablerSofaIcon";
}
