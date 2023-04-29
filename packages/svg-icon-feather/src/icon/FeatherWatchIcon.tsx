import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherWatchIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherWatchIcon = React.forwardRef<SVGSVGElement, FeatherWatchIconProps>(function FeatherWatchIcon(
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
			<circle cx="12" cy="12" r="7" />
			<polyline points="12 9 12 12 13.5 13.5" />
			<path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherWatchIcon.displayName = "FeatherWatchIcon";
}
