import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherTrelloIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherTrelloIcon = React.forwardRef<SVGSVGElement, FeatherTrelloIconProps>(function FeatherTrelloIcon(
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
			<rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
			<rect x="7" y="7" width="3" height="9" />
			<rect x="14" y="7" width="3" height="5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherTrelloIcon.displayName = "FeatherTrelloIcon";
}
