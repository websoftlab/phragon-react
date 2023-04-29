import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherItalicIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherItalicIcon = React.forwardRef<SVGSVGElement, FeatherItalicIconProps>(function FeatherItalicIcon(
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
			<line x1="19" y1="4" x2="10" y2="4" />
			<line x1="14" y1="20" x2="5" y2="20" />
			<line x1="15" y1="4" x2="9" y2="20" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	FeatherItalicIcon.displayName = "FeatherItalicIcon";
}
