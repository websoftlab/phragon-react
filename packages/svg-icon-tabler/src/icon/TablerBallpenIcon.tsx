import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBallpenIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBallpenIcon = React.forwardRef<SVGSVGElement, TablerBallpenIconProps>(function TablerBallpenIcon(
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
			<path d="M14 6l7 7l-4 4" />
			<path d="M5.828 18.172a2.828 2.828 0 0 0 4 0l10.586 -10.586a2 2 0 0 0 0 -2.829l-1.171 -1.171a2 2 0 0 0 -2.829 0l-10.586 10.586a2.828 2.828 0 0 0 0 4z" />
			<path d="M4 20l1.768 -1.768" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBallpenIcon.displayName = "TablerBallpenIcon";
}
