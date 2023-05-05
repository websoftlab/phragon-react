import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCopyleftIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCopyleftIcon = React.forwardRef<SVGSVGElement, TablerCopyleftIconProps>(function TablerCopyleftIcon(
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
			<path d="M22 12 A10 10 0 0 1 12 22 A10 10 0 0 1 2 12 A10 10 0 0 1 22 12" />
			<path d="M9 9.35a4 4 0 1 1 0 5.3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCopyleftIcon.displayName = "TablerCopyleftIcon";
}
