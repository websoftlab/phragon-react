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
			<path d="M4 11a2 2 0 0 1 2 2v1h12v-1a2 2 0 1 1 4 0v5a1 1 0 0 1 -1 1h-18a1 1 0 0 1 -1 -1v-5a2 2 0 0 1 2 -2z" />
			<path d="M4 11v-3a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v3" />
			<path d="M12 5v9" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSofaIcon.displayName = "TablerSofaIcon";
}
