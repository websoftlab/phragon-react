import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherShareIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherShareIcon = React.forwardRef<SVGSVGElement, FeatherShareIconProps>(function FeatherShareIcon(
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
			<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
			<polyline points="16 6 12 2 8 6" />
			<line x1="12" y1="2" x2="12" y2="15" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherShareIcon.displayName = "FeatherShareIcon";
}
