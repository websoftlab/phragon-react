import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBlurOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBlurOffIcon = React.forwardRef<SVGSVGElement, TablerBlurOffIconProps>(function TablerBlurOffIcon(
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
			<path d="M12 3v5m0 4v8" />
			<path d="M5.641 5.631a9 9 0 1 0 12.719 12.738m1.68 -2.318a9 9 0 0 0 -12.074 -12.098" />
			<path d="M16 12h5" />
			<path d="M13 9h7" />
			<path d="M12 6h6" />
			<path d="M12 18h6" />
			<path d="M12 15h3m4 0h1" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBlurOffIcon.displayName = "TablerBlurOffIcon";
}
