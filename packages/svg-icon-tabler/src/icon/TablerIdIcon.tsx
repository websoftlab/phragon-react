import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerIdIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerIdIcon = React.forwardRef<SVGSVGElement, TablerIdIconProps>(function TablerIdIcon(props, ref) {
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
			<path d="M3 4m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
			<path d="M9 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M15 8l2 0" />
			<path d="M15 12l2 0" />
			<path d="M7 16l10 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerIdIcon.displayName = "TablerIdIcon";
}
