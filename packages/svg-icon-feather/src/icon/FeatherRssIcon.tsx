import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherRssIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherRssIcon = React.forwardRef<SVGSVGElement, FeatherRssIconProps>(function FeatherRssIcon(props, ref) {
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
			<path d="M4 11a9 9 0 0 1 9 9" />
			<path d="M4 4a16 16 0 0 1 16 16" />
			<circle cx="5" cy="19" r="1" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherRssIcon.displayName = "FeatherRssIcon";
}
