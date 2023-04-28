import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFlaskIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFlaskIcon = React.forwardRef<SVGSVGElement, TablerFlaskIconProps>(function TablerFlaskIcon(
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
			<path d="M9 3l6 0" />
			<path d="M10 9l4 0" />
			<path d="M10 3v6l-4 11a.7 .7 0 0 0 .5 1h11a.7 .7 0 0 0 .5 -1l-4 -11v-6" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerFlaskIcon.displayName = "TablerFlaskIcon";
}
