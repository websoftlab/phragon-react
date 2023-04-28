import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLemonIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLemonIcon = React.forwardRef<SVGSVGElement, TablerLemonIconProps>(function TablerLemonIcon(
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
			<path d="M17.536 3.393c3.905 3.906 3.905 10.237 0 14.143c-3.906 3.905 -10.237 3.905 -14.143 0l14.143 -14.143" />
			<path d="M5.868 15.06a6.5 6.5 0 0 0 9.193 -9.192" />
			<path d="M10.464 10.464l4.597 4.597" />
			<path d="M10.464 10.464v6.364" />
			<path d="M10.464 10.464h6.364" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLemonIcon.displayName = "TablerLemonIcon";
}
